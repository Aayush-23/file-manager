import { CiFileOn } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { CiImageOn } from "react-icons/ci";
import { TbSvg } from "react-icons/tb";

const FileIcon = ({
  type,
  className,
}: {
  type?: string;
  className: string;
}) => {
  switch (type) {
    case "html":
      return <FaHtml5 className={className} />;
    case "js":
      return <FaJs className={className} />;
    case "css":
      return <SiCsswizardry className={className} />;
    case "img":
    case "webp":
      return <CiImageOn className={className} />;
    case "svg":
      return <TbSvg className={className} />;
    case "ts":
      return <SiTypescript className={className} />;

    default:
      return <CiFileOn className={className} />;
  }
};

export default FileIcon;
