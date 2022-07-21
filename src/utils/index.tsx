
export const sendAx = async (url: string, data: any) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    });
    if (res.status > 500) return { error: "server error" };
    if (res.status > 400) return { error: "error" };
    const ans = JSON.parse(await res.text());
    if (ans.code != 0) return { error: ans.message };
    return ans;
  }
  catch (err) {
    throw new Error("网络错误");
  }
};
// eslint-disable-next-line @typescript-eslint/ban-types
export const axios = async (fn: Function, Toast: unknown, navigate: Function, handleFunc: Function, data: never) => {
  const me = await fn(data);
  if (me.error) {
    if (typeof Toast === "function") {
      Toast(me);
    } else {
      // 
    }
  } else {
    return me;
  }
};