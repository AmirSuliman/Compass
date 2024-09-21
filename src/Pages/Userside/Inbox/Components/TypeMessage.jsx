import { Paperclip, SendHorizontal } from 'lucide-react';

const TypeMessage = () => {
  return (
    <form className="mt-auto mb-0 bg-white rounded-lg p-4 flex items-center w-full gap-4 absolute bottom-0 left-0 right-0">
      <label className="flex text-medium-gray cursor-pointer">
        <Paperclip size={18} />
        <input type="file" className="h-[0.05px] w-[0.05px] overflow-hidden" />
      </label>
      <input
        type="text"
        name="typeMessage"
        placeholder="Type a message"
        className="outline-none w-full bg-transparent font-light text-lg"
      />
      <button
        type="submit"
        className="rounded-full aspect-square p-2 ml-auto mr-0 bg-Yellow flex items-center justify-center text-white"
      >
        <SendHorizontal size={18} />
      </button>
    </form>
  );
};
export default TypeMessage;
