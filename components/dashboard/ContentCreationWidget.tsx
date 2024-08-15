import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type ContentType = 'blogPost' | 'socialMedia' | 'productDescription' | 'other';

interface FormData {
  title?: string;
  content?: string;
  platform?: string;
  productName?: string;
  prompt?: string; // Add prompt property
}

const ContentCreationWidget: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedContentType, setSelectedContentType] = useState<ContentType | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleContentTypeSelect = (contentType: ContentType) => {
    setSelectedContentType(contentType);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content: string) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Submitted content:', { type: selectedContentType, ...formData });
      toast.success('Content created successfully!');
      setIsModalOpen(false);
      setFormData({});
    } catch (error) {
      console.error("Error submitting content:", error);
      toast.error('Failed to create content.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.post('https://scribeai-backend.onrender.com/api/content/generate', {
        prompt: formData.prompt,
        type: selectedContentType,
      });
      let { title, content } = response.data;
      console.log('Generated data:', response.data);
  
      // Remove everything before and including "Answer:" from the content
      const answerIndex = content.indexOf('Answer:');
      if (answerIndex !== -1) {
        content = content.substring(answerIndex + 7).trim(); // Removes "Answer:" and trims the rest
      }
  
      setFormData(prevData => ({
        ...prevData,
        title: title || prevData.title,
        content: content || prevData.content,
      }));
      toast.success('Content generated successfully!');
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error('Failed to generate content.');
    } finally {
      setIsGenerating(false);
    }
  };
  

  const renderFormFields = () => {
    return (
      <>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Enter a prompt to guide the AI content generation
          </label>
          <textarea
            id="prompt"
            name="prompt"
            placeholder="e.g., Write a blog post about the benefits of exercise..."
            value={formData.prompt || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded h-24 resize-y"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleGenerateContent}
          disabled={isGenerating || !formData.prompt}
          className="w-full mb-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
        >
          {isGenerating ? 'Generating...' : 'Generate with AI'}
        </button>
        {selectedContentType === 'blogPost' && (
          <input
            type="text"
            name="title"
            placeholder="Blog Title "
            value={formData.title || ''}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded"
          />
        )}
        {selectedContentType === 'socialMedia' && (
          <select
            name="platform"
            value={formData.platform || ''}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="">Select Platform</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
        )}
        {selectedContentType === 'productDescription' && (
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName || ''}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded"
          />
        )}
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            {selectedContentType === 'productDescription' ? 'Product Description' : 'Content'}
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content || ''}
            onChange={handleEditorChange}
            placeholder="Your content will appear here. You can edit it after generation."
          />
        </div>
      </>
    );
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl w-1/2">
      <h2 className="text-2xl font-bold mb-4">Create New Content</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleContentTypeSelect('blogPost')}
          className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <span className="mr-2 text-xl">📝</span>
          <span>Blog Post</span>
        </button>
        <button
          onClick={() => handleContentTypeSelect('socialMedia')}
          className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <span className="mr-2 text-xl">📱</span>
          <span>Social Media</span>
        </button>
        <button
          onClick={() => handleContentTypeSelect('productDescription')}
          className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <span className="mr-2 text-xl">🛍️</span>
          <span>Product Description</span>
        </button>
        <button
          onClick={() => handleContentTypeSelect('other')}
          className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <span className="mr-2 text-xl">➕</span>
          <span>Other</span>
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">
              Create {selectedContentType && selectedContentType.charAt(0).toUpperCase() + selectedContentType.slice(1)}
            </h3>
            <form onSubmit={handleSubmit}>
              {renderFormFields()}
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-6 py-2 text-gray-600 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ContentCreationWidget;
