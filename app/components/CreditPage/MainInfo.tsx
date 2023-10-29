import { BsPersonFill } from "react-icons/bs";

export default function MainInfo() {
  return (
    <div>
      <div>
        <div>User Info</div>
        <div>
          <div className="bg-white flex p-[15px] rounded-[16px]">
            <div className="p-[20px] rounded-[16px] border">
              <BsPersonFill size={74}></BsPersonFill>
            </div>
            <div className="flex flex-col">
              <div>Name: Tunde</div>
              <div>Age: 32</div>
              <div>Location: Phase Iv, Abuja</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
