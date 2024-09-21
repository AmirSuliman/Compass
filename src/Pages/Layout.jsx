import '../App.css';
import Header from '../Layout/components/header';

const Layout = ({ children, heading, subHeading, sidebar }) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="w-full md:ml-[17rem] px-[3%]">
        <Header subHeading={subHeading} heading={heading} />
        <div className="whitespace-nowrap md:hidden">
          {heading}
          {subHeading}
        </div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
