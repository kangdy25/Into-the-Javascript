// GET 요청
        // $.get('https://codingapple1.github.io/hello.txt').done((data)=>{
        //     console.log(data)
        // }).fail(()=>{
        //     console.log('실패')
        // })

        // POST 요청
        // $.post('https://codingapple1.github.io/hello.txt', {name: 'kang'}).done((data)=>{
        //     console.log(data)
        // })

        $.get('https://codingapple1.github.io/price.json').done((data)=>{
            console.log(data)
        })
        
        // 바닐라 자바스크립트로 Ajax 요청하기
        fetch('https://codingapple1.github.io/price.json')
        .then(res => res.json())
        .then(function(data){
            console.log(data)
        })
        .catch(function(error){
            console.log('실패함')
        });

        