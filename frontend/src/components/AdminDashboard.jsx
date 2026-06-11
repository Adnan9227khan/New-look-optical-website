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
        title: 'Error',
        description: 'Failed to load frames',
        variant: 'destructive'
      });
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
        toast({ title: 'Frame updated successfully!' });
      } else {
        await axios.post(
          `${API_BASE}/api/admin/frames`,
          { ...formData, price: parseFloat(formData.price || 0) },
          { headers: getAuthHeader() }
        );
        toast({ title: 'Frame added successfully!' });
      }
      resetForm();
      fetchFrames();
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.detail || 'Failed to save frame',
        variant: 'destructive'
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
      toast({ title: 'Frame deleted successfully!' });
      fetchFrames();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete frame',
        variant: 'destructive'
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
              {editingFrame ? 'Edit Frame' : 'Add New Frame'}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Frame Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Ray-Ban Aviator"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="men">Men's Frames</option>
                  <option value="women">Women's Frames</option>
                  <option value="kids">Kids Collection</option>
                  <option value="contact_lenses">Contact Lenses</option>
                  <option value="sunglasses">Sunglasses</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  step="0.01"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Ray-Ban, Oakley"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Image URL *</label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="https://images.unsplash.com/..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  Get free images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Unsplash</a> or <a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pexels</a>
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the frame..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="in_stock"
                  checked={formData.in_stock}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label className="ml-2 text-sm font-semibold">In Stock</label>
              </div>

              <div className="md:col-span-2 flex gap-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {editingFrame ? 'Update Frame' : 'Add Frame'}
                </Button>
                {editingFrame && (
                  <Button type="button" onClick={resetForm} variant="outline">
                    Cancel Edit
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Array.isArray(frames) ? frames : []).map((frame, idx) => (
            <div key={frame.id ?? frame._id ?? idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={frame.image_url || ''}
                alt={frame.name || 'Frame'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{frame.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${frame.in_stock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {frame.in_stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{frame.brand}</p>
                <p className="text-blue-600 font-bold text-xl mb-2">₹{Number(frame?.price ?? 0)}</p>
                <p className="text-sm text-gray-500 mb-4 capitalize">{(frame.category || '').toString().replace('_', ' ')}</p>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(frame)}
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(frame.id ?? frame._id)}
                    size="sm"
                    variant="outline"
                    className="flex-1 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(Array.isArray(frames) ? frames : []).length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">No frames added yet. Add your first frame to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
