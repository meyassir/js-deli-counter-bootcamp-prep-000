function takeANumber(currentLine, name)
{
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine)
{
  if(currentLine.length === 0) return "There is nobody waiting to be served!";
  return `Currently serving ${currentLine.shift();}`;

}
