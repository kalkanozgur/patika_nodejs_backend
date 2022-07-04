const posts = [
    { author: "Ali", title: "Post1" },
    { author: "Veli", title: "Post2" },
    { author: "Ahmet", title: "Post3" },
  ];

  const addPost = (post) => {
    return new Promise((resolve, reject) => {
      try {
        posts.push(post);
        resolve(posts);
      } catch (err) {
        reject(err);
      }
    });
  };
  
  const orderPost = () => {
    return new Promise((resolve, reject) => {
      if (posts.length > 0) {
        posts.map((post) => {
          console.log(post.title);
        });
        resolve("Postlar sıralandı.");
      } else {
        reject("Bir hata oluştu.");
      }
    });
  };
  
  async function process() {
    const newPost = { author: "V.I. Lenin", title: "State & Revolution" };
    try {
      await orderPost();
      await addPost(newPost);
      await orderPost();
      console.log("İşlem başarılı.");
    } catch (error) {
      console.log(error);
    }
  }
  
  process();