import "./marque.css"; 


function VerticalMarquee() {
  return (
    <div className="h-8 overflow-hidden  bg-[#FFB300] flex items-center">
      <div className="animate-verticalMarquee flex space-x-2  text-[#4C4D52] whitespace-nowrap">
        <div className="">🚀 Launching new features next week</div>
        <div>💳 Payment integration now live</div>
        <div>⚡ Ultra-fast landing pages available</div>
      </div>
    </div>
  );
}

export default VerticalMarquee;
