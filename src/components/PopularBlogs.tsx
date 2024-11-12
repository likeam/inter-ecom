import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Jordan",
      likes: 142,
      comments: 44,
    },
    {
      title: "My Amazing Blog Title 2",
      author: "John",
      likes: 152,
      comments: 25,
    },
    {
      title: "My Amazing Blog Title 3",
      author: "Zain",
      likes: 172,
      comments: 14,
    },
    {
      title: "My Amazing Blog Title 4",
      author: "Roose",
      likes: 210,
      comments: 84,
    },
    {
      title: "My Amazing Blog Title 5",
      author: "Kilsan",
      likes: 112,
      comments: 8,
    },
  ];

  return (
    <div className=" bg-gray-400 p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className=" text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className=" mb-4">
            <div className=" flex justify-between items-center">
              <span className=" font-bold mb-2">{blog.title}</span>
            </div>
            <span className=" text-gray-800">Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className=" text-gray-800 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <div className=" text-gray-900 mr-2 ml-2">{blog.comments}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
