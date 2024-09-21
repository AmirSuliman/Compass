import { EllipsisVertical } from 'lucide-react';
import profile from '../../../../assets/react.svg';
import SentMessage from './SentMessage';
import TypeMessage from './TypeMessage';

const ChatArea = () => {
  return (
    <article className="relative bg-deep-gray rounded-2xl w-full min-h-screen pb-16">
      <div className="bg-lighter-yellow rounded-2xl px-8 py-4 flex gap-4 items-center">
        <img src={profile} alt="user avatar" className="size-12 rounded-full" />
        <h4 className="font-medium text-lg">John Doe</h4>
        <EllipsisVertical className="ml-auto mr-0 cursor-pointer" />
      </div>
      <SentMessage />
      <TypeMessage />
    </article>
  );
};
export default ChatArea;
