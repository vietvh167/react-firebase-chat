import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const upload = async (file) => {
const date = new Date()
  const storage = getStorage(); // Khởi tạo storage
  const storageRef = ref(storage, `images/${date + file.name}`); // Đường dẫn tới nơi lưu tệp, có thể thay đổi

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => { // Sửa cú pháp Promise
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject("Something went wrong! " + error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  });
};

export default upload;
