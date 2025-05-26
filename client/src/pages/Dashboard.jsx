import AddPost from "./AddPost";

function Dashboard() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex justify-end mt-6">
          <AddPost />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
