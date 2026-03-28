export const uploadScan = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:8080/api/upload", {
    method: "POST",
    body: formData,
  });

  return response.json();
};