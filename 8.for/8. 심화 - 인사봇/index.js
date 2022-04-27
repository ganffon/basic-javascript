let group1 = [0, 1, 1, 0, 0];


const helloBot = people => {
  for (let i=0;i<group1.length;i++){
      if (group1[i]==0){
          group1.splice(i,1,"안녕하세요")
      }else{
          group1.splice(i,1,"또 만나네요")
      }
  }
  console.log(group1)
}


helloBot(group1);





module.exports = { helloBot };