export default function (): string {
  let max = Math.floor(1000)
  let min = Math.ceil(2)
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return `https://avatars.dicebear.com/api/micah/seed-${randomNumber}.svg`
}
