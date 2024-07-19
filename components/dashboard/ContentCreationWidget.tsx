import React, { useState } from 'react';

const ContentTypeButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
  >
    <span className="mr-2 text-xl">{icon}</span>
    <span>{label}</span>
  </button>
);

const ContentCreationWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const handleContentTypeSelect = (contentType) => {
    setSelectedContentType(contentType);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl w-1/2">
      <h2 className="text-2xl font-bold mb-4">Create New Content</h2>
      <div className="grid grid-cols-2 gap-4">
        <ContentTypeButton
          icon="📝"
          label="Blog Post"
          onClick={() => handleContentTypeSelect('blogPost')}
        />
        <ContentTypeButton
          icon="📱"
          label="Social Media"
          onClick={() => handleContentTypeSelect('socialMedia')}
        />
        <ContentTypeButton
          icon="🛍️"
          label="Product Description"
          onClick={() => handleContentTypeSelect('productDescription')}
        />
        <ContentTypeButton
          icon="➕"
          label="Other"
          onClick={() => handleContentTypeSelect('other')}
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              Create {selectedContentType}
            </h3>
            {/* Add form fields for content creation here */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCreationWidget;