import { getMessagesList, sendMessage } from "./connection";

describe("connection", () => {
  it("getMessagesList send request", async () => {
    const iUser = [
      { date: "2022-03-19", message: "hello world", nickname: "Anton" },
    ];
    const mockJsonPromise = Promise.resolve(iUser);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    globalThis.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);
    const result = await getMessagesList();
    expect(fetch).toHaveBeenCalled();
    expect(result).toStrictEqual([
      {
        date: new Date("2022-03-19"),
        message: "hello world",
        nickname: "Anton",
      },
    ]);
  });
  it("sendMessage send request", async () => {
    const iUser = {
      date: new Date("2022-03-19"),
      message: "hello world",
      nickname: "Anton",
    };
    const mockJsonPromise = Promise.resolve(iUser);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    globalThis.fetch = jest.fn().mockImplementationOnce(() => mockFetchPromise);
    const result = await sendMessage(iUser);
    expect(fetch).toHaveBeenCalled();
    expect(result).toStrictEqual(iUser);
  });
});
