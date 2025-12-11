import ProfileContent from "../../components/ProfileContent";

export const dynamic = "force-dynamic"; // keep dynamic rendering

export default function ProfilePage() {
  return <ProfileContent />; // client-only logic lives here
}
