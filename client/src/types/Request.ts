type requestParam = {
  type: "get" | "post";
  endPoint: string;
  state?: any;
  postData?: object;
};

export { requestParam };
