import React from "react";
import "./SingleList.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface Props {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
}
export const SingleList = ({
  organization,
  username,
  email,
  phoneNumber,
  dateJoined,
}: Props) => {

  return (
    <tr className="singlelist-tr">
      <td className="single">{organization}</td>
      <td className="single">{username}</td>
      <td className="single">{email}</td>
      <td className="single">{phoneNumber}</td>
      <td className="single">{dateJoined}</td>
      <td className="single">Status</td>
      <td>
        <BiDotsVerticalRounded />
      </td>
    </tr>
  );
};
