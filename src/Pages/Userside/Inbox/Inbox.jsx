import ChatArea from './Components/ChatArea';
import Chats from './Components/Chats';
import Header from './Components/Header';

const Inbox = () => {
  return (
    <main>
      <Header />
      <section className="flex flex-col md:flex-row gap-2 mt-4">
        <Chats />
        <ChatArea />
      </section>
    </main>
  );
};
export default Inbox;
