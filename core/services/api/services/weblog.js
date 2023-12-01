const apiClient = "https://api.o-g-hashemi.com/";
const auth_header = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getWeblog = async () => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/blogs?count=2000`,
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

export const getDetailWeblog = async (id) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/blogs/detail/${id}`,
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

export const getWeblogByCategory = async (categoryId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/blogs/by/category/${categoryId}`,
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

export const postWeblogSearch = async (formData) => {
    const response = await fetch(
      `https://api.o-g-hashemi.com/api/blogs/search`,
      {
        method: 'POST',
        headers: auth_header,
         cache: "no-store",
        body: formData,

      } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    const data = await response.json();
    console.log("request data", data);
    return data;
};
