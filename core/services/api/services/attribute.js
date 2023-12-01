const apiClient = 'https://api.o-g-hashemi.com/'
const auth_header = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const getAttribute = async () => {
    const response = await fetch(
      `https://api.o-g-hashemi.com/api/attributes?count=2000`,
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


