const func = async () => {
  const response = await window.versions.ping()
  console.log("zhongwen")
  console.log(response) // 打印 'pong'
}

func()