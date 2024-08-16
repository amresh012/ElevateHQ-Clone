/* eslint-disable react/prop-types */


const Header = ({ text, icon ,classname }) => {
    return (
      <div
        className={`w-full p-2 text-sx lg:text-base font-medium text-left bg-slate-900 flex gap-2 items-center justify-center ${classname}`}
      >
        <p>{text}</p>
        <span>{icon }</span>
      </div>
    );
}



export default Header