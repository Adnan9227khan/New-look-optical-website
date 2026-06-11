import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const API_BASE = (process.env.REACT_APP_BACKEND_URL || '').replace(/\/$/, '');

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [frames, setFrames] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingFrame, setEditingFrame] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'men',
    price: '',
    brand: '',
    image_url: '',
    description: '',
    in_stock: true
  });

  useEffect(() => {
    checkAuth();
    fetchFrames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  };

  const getAuthHeader = () => {
    const token = localStorage.getItem('admin_token');
    return { Authorization: `Bearer ${token}` };
  };

  const normalizeFrames = (data) => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.frames)) return data.frames;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.items)) return data.items;
    return [];
  };

  const fetchFrames = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/api/frames`);
      setFrames(normalizeFrames(data));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load frames",
        variant: "destructive"
      });
      // Ensure we never break the UI
      setFrames([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFrame) {
        await axios.put(
          `${API_BASE}/api/admin/frames/${editingFrame.id ?? editingFrame._id}`,
          formData,
          { headers: getAuthHeader() }
        );
        toast({ title: "Frame updated successfully!" });
      } else {
        await axios.post(
          `${API_BASE}/api/admin/frames`,
          { ...formData, price: parseFloat(formData.price || 0) },
          { headers: getAuthHeader() }
        );
        toast({ title: "Frame added successfully!" });
      }
      resetForm();
      fetchFrames();
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to save frame",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (frame) => {
    setEditingFrame(frame);
    setFormData({
      name: frame.name ?? '',
      category: frame.category ?? 'men',
      price: String(frame.price ?? ''),
      brand: frame.brand ?? '',
      image_url: frame.image_url ?? '',
      description: frame.description ?? '',
      in_stock: Boolean(frame.in_stock)
    });
    setShowForm(true);
  };

  const handleDelete = async (frameId) => {
    if (!window.confirm('Are you sure you want to delete this frame?')) return;
    try {
      await axios.delete(
        `${API_BASE}/api/admin/frames/${frameId}`,
        { headers: getAuthHeader() }
      );
      toast({ title: "Frame deleted successfully!" });
      fetchFrames();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete frame",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'men',
      price: '',
      brand: '',
      image_url: '',
      description: '',
      in_stock: true
    });
    setEditingFrame(null);
    setShowForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-blue-200 mt-1">Manage your eyewear frames</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Website
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Add Frame Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            {showForm ? 'Cancel' : 'Add New Frame'}
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">
