const upload = document.getElementById("upload");
const bar = document.getElementById('bar');
const imgContainer = document.getElementById("img-container");
const dragzone = document.getElementById("dragzone");

let isUploading = false;

upload.addEventListener("mousedown", () => {
  if (isUploading) return;
  isUploading = true;
  upload.innerText = "Uploading...";
  dragzone.classList.add("fadeOut");
  imgContainer.classList.add('syncing');
  bar.classList.add('active');

  mock().then(() => {
    upload.innerText = "Done";
    imgContainer.classList.remove('syncing');
    imgContainer.classList.add('done');
  });
});

const mock = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
};
