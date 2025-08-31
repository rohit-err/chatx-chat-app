import { FaGithub } from "react-icons/fa";

const GitHubFloatingButton = () => {
  return (
    <a
      href="https://github.com/rohit-err/chatx-chat-app" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-2 bottom-4 z-50 tooltip tooltip-left"
      data-tip="View Repository"
    >
      <div className="btn btn-circle btn-primary shadow-lg hover:scale-110 transition-transform">
        <FaGithub className="w-5 h-5" />
      </div>
    </a>
  );
};

export default GitHubFloatingButton;
