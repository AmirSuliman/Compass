import profile from '../../../../assets/react.svg';

const SentMessage = () => {
  const messageTime = new Date().toLocaleTimeString();

  return (
    <div className="flex items-center gap-2 mt-8 px-8 w-4/5">
      <img src={profile} alt="user avatar" className="size-8 rounded-full" />
      <div>
        <p className="bg-[#DDDDDD] p-4 rounded-lg text-xs rounded-bl-none">
          Lorem Ipsum ha sido el texto de relleno estándar de las Lorem Ipsum ha
          sido el texto de relleno estándar de las
        </p>
        <p className="font-light text-xs mt-1">{messageTime}</p>
      </div>
    </div>
  );
};
export default SentMessage;
