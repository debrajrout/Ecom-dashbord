import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SettingPageProps {
  params: {
    storeId: string;
  };
}

const SettingPage: React.FC<SettingPageProps> = ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("sign-in");
  }
  return <div>hi</div>;
};
export default SettingPage;
