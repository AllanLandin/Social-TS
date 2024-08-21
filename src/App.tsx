import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";
import { postList } from "./api/post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.postsContainer}>
          {postList.map((postData, index) => {
            return <Post key={index} postData={postData} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
