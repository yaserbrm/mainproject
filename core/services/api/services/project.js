const apiClient = "https://api.o-g-hashemi.com/";
const auth_header = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getAllProjects = async () => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects?count=2000`,
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

export const getDoingProjects = async () => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/doing?count=200`,
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

export const getDoneProjects = async () => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/done?count=200`,
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

export const getDetailProject = async (id) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/detail/${id}`,
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

export const getProjectsByService = async (serviceId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/by/service/${serviceId}`,
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

export const getProjectsDoingByService = async (serviceId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/doing/by/service/${serviceId}`,
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

export const getProjectsDoneByService = async (serviceId) => {
  const response = await fetch(
    `https://api.o-g-hashemi.com/api/projects/done/by/service/${serviceId}`,
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

//-----------------------------------------------------------------------------

export const getProjectsSearchByType = async (formData) => {
    const response = await fetch(
      `https://api.o-g-hashemi.com/api/projects/search/by/type`,
      {
        headers: auth_header,
        cache: "no-store",
        method: 'POST',
        body: formData,
      } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    const data = await response.json();
    console.log("request data", data);
    return data;
};

export const getProjectsSearchByService = async (formData) => {
    const response = await fetch(
      `https://api.o-g-hashemi.com/api/projects/search/by/type`,
      {
        headers: auth_header,
       cache: "no-store",
        method: 'POST',
        body: formData,
      } // in default is "ssg"  when you write {cache:"no-store"}  change to "ssr"  and for "isr" you write {next:{ravalidate:"60"}} (60 means refres besho har 60 sanie)
    );
    const data = await response.json();
    console.log("request data", data);
    return data;
};
