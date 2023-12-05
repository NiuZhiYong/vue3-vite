import { StorageCls, Key, Result, Data, Expire } from "../types/storage";
import { Dictionnaries } from "../enum/storage";

export class Storage implements StorageCls {
  set<T>(key: Key, value: T, expire: Expire = Dictionnaries.permanent) {
    const data = {
      value,
      [Dictionnaries.expire]: expire,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: Key): Result<T> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      if (
        typeof data[Dictionnaries.expire] == "number" &&
        data[Dictionnaries.expire] < now
      ) {
        // 数字类型并且有效，但是过期了，删除并提示
        this.remove(key);
        return {
          msg: "已经过期失效",
          value: null,
        };
      } else {
        // 否则成功返回
        return {
          msg: "已经取到值",
          value: data.value,
        };
      }
    } else {
      return {
        msg: "取不到值",
        value: null,
      };
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
