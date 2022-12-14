import CodeLayout from "../components/CodeLayout";
import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";

const Home = () => {
  const { language } = useEditor();

  return (
    <CodeLayout
      title="Home"
      content="Enter code in either language and get the output for the entered code"
    >
      <div className="h-full">
        {language === "webd" ? <WebD /> : <ProgrammingEditor />}
      </div>
    </CodeLayout>
  );
};

export default Home;
