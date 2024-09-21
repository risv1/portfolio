const Background: React.FC = () => (
    <div className="fixed inset-0 w-full h-full z-0">
      <img 
        src="/image.png" 
        alt="dazai cityscape lol" 
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/80 to-black/90" />
    </div>
  );
  
  export default Background;