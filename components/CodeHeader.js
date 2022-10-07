import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import OrientationMenu from "./OrientationMenu";
import SettingsModal from "./SettingsModal";
import { useEditor } from "../context/AppContext";

const CodeHeader = () => {
  const { language } = useEditor();

  return (
    <nav className="flex items-center justify-between px-16 py-3 shadow-md bg-paper">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center gap-3 pointer">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            EduMillenial
          </h1>
        </a>
      </Link>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-5 text-white">
        {/* Change the orientation of editors (only for webd view) */}
        {language === "webd" && <OrientationMenu />}

        {/* Choose language */}
        <LanguageMenu />

        {/* Opens settings modal */}
        <SettingsModal />
      </div>
    </nav>
  );
};

export default CodeHeader;
