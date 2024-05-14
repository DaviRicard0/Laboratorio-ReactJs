import { useEffect, useState } from "react";

export default function CounterPeople(){
    const [total,setTotal] = useState(0);
    const [totalMan,setTotalMan] = useState(0);
    const [totalWoman,setTotalWoman] = useState(0);

    useEffect(()=>{
        setTotal(totalMan + totalWoman);
    },[totalMan,totalWoman]);

    return (
        <main style={{border:"1px solid black",padding:10, width:'430px', alignItems:'center', display:'flex', flexDirection:'column'}}>
            <section style={{width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                <div></div>
                <div style={{paddingTop:'10px',display:'flex',flexDirection:'column'}}>
                    <label>Total</label>
                    <input disabled value={total}/>
                </div>
                <div style={{padding:'10px'}}>
                    <button onClick={() => {
                        setTotal(0);
                        setTotalWoman(0);
                        setTotalMan(0);
                    }}>
                        <img alt="" style={{width:20,height:20}} src="https://cdn-icons-png.freepik.com/512/560/560463.png"/>
                    </button>
                </div>
            </section>
            <section style={{display:'flex',width:'100%',flexDirection:'row'}}>
                <div style={{display:'flex',marginTop:15,alignItems:'center',flexDirection:'column'}}>
                    <img alt="" style={{width:40,height:40}} src="https://www.pikpng.com/pngl/b/427-4274683_cabea-o-boneco-avatar-homem-gravata-jaqueta-dummy.png"/>
                    <div>
                        <button onClick={() => setTotalMan(prev => prev + 1)}>+</button>
                        <button onClick={() => setTotalMan(prev => prev - 1)}>-</button>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <label>Homens</label>
                        <input value={totalMan} onChange={(e) => setTotalMan(e.target.value)}/>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:80,marginTop:15,alignItems:'center',flexDirection:'column'}}>
                    <img alt="" style={{width:40,height:40}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZxM4n1okdWDXsYSLmzr2qmYcC3whkXU2UROBDgIw1QMVH3Mz"/>
                    <div>
                        <button onClick={() => setTotalWoman(prev => prev + 1)}>+</button>
                        <button onClick={() => setTotalWoman(prev => prev - 1)}>-</button>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <label>Mulheres</label>
                        <input value={totalWoman} onChange={(e) => setTotalWoman(e.target.value)}/>
                    </div>
                </div>
            </section>
        </main>
    );
}