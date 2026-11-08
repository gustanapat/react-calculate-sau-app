import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <p className="font-itim text-gray-600">
        © 2026 React App. All rights reserved.
      </p>

      <p className="font-itim text-gray-600">
        Created by 6952D10008 Tanapat Srirabay.
      </p>

      <div className="flex justify-center gap-5 mt-5">
        <FaFacebook className="text-blue-500" />
        <FaGoogle className="text-red-500" />
        <FaXTwitter className="text-black-400" />
      </div>
    </div>
  )
}
