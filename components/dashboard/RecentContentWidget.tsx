import React, { useState, useRef, useEffect } from 'react';

const ContentItem = ({ type, title }) => (
  <div className="p-4 border-b last:border-b-0">
    <p className="text-sm font-medium text-gray-500">{type}</p>
    <p className="mt-1 text-lg font-semibold text-gray-900 truncate">{title}</p>
  </div>
);

const RecentContentWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const recentContent = [
    { type: "Blog Post", title: "10 Tips for Better Writing" },
    { type: "Social Media", title: "Product Launch Announcement" },
    { type: "Product Description", title: "New Gadget X Features" },
    { type: "Email Campaign", title: "Summer Sale Newsletter" },
    { type: "Landing Page", title: "Upcoming Webinar Registration" },
    { type: "Blog Post", title: "The Future of AI in Content Creation" },
    { type: "Social Media", title: "Customer Spotlight: Success Story" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling && scrollRef.current) {
        setIsScrolling(true);
        const scrollTop = scrollRef.current.scrollTop;
        const itemHeight = scrollRef.current.scrollHeight / recentContent.length;
        const newIndex = Math.round(scrollTop / itemHeight);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsScrolling(false), 100);
      }
    };

    scrollRef.current?.addEventListener('scroll', handleScroll);
    return () => scrollRef.current?.removeEventListener('scroll', handleScroll);
  }, [isScrolling, recentContent.length]);

  return (
    <div className="w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Recent Content</h2>
      </div>
      <div 
        ref={scrollRef}
        className="overflow-y-auto relative"
        style={{ height: '12rem' }}
      >
        <div 
          className="absolute w-full transition-transform duration-300"
          style={{ transform: `translateY(-${currentIndex * 50}%)` }}
        >
          {recentContent.map((item, index) => (
            <ContentItem key={index} type={item.type} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentContentWidget;