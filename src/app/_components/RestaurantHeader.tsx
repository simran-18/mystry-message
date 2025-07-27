import Link from "next/link";
const RestaurantHeader = () => {
  return (
    <div className="navbar">
      <ul className="">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Login/Signup</Link></li>
        <li><Link href="/">Profile</Link></li>
        <li></li>
      </ul>
    </div>
  );
}
export default RestaurantHeader;