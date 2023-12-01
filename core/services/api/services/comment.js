const apiClient = "https://api.o-g-hashemi.com/";
const auth_header = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getProjectComment = async (projectId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/comments/project/${projectId}`,
    {
      method: "GET",
      headers: auth_header,
      cache: "no-store",
    } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
  );
  const data = await response.json();
  console.log("request data", data);
  return data;
};

export const getBlogComment = async (blogId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/comments/blog/${blogId}`,
    {
      method: "GET",
      headers: auth_header,
      cache: "no-store",
    } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
  );
  const data = await response.json();
  console.log("request data", data);
  return data;
};

export const postComment = async (formData) => {
    const response = await fetch(
      `https://api.o-g-hashemi.com/api/comments/store`,
      {
        method: 'POST',
        headers: auth_header,
        body: formData,

      } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    const data = await response.json();
    console.log("request data", data);
    return data;
};
