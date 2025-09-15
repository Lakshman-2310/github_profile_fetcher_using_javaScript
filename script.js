async function getUser() {
  const user = document.getElementById("username").value;
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) throw new Error("User not found");

    const data = await response.json();

    resultDiv.innerHTML = `
      <img src="${data.avatar_url}" width="100"><br>
      <strong>Name:</strong> ${data.name || "No name"} <br>
      <strong>Public Repos:</strong> ${data.public_repos} <br>
      <strong>Followers:</strong> ${data.followers} <br>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
