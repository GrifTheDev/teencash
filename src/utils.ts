export async function generateId(len: number): Promise<string> {
    const choose: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ1234567890";
    let final: string = "";
  
    for (let i = 0; i < len; i++) {
      final += choose[Math.floor(Math.random() * choose.length)];
    }
  
    return final;
}