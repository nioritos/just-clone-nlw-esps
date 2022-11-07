import { GiConsoleController } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
    display: any
}

export default function Modal(display: ModalProps) {
    
    return (
        <div className={`modal !fixed modal w-screen h-screen bg-[rgba(0,0,0,0.7)] flex justify-center items-center  z-[9999]  `}>
            <div className="content-modal p-12 w-[45vw] h-[95vh] rounded-lg bg-[#2A2634] flex flex-col">
                <div className='flex w-full justify-between items-center'>
                    <h1 className="text-white font-bold text-3xl">Publique um anúncio</h1>
                    <AiOutlineClose size="26" color='white' className='hover:cursor-pointer hover:opacity-50 duration-500'/>
                </div>
                <form action="submit" className="form-area w-full h-full flex flex-col items-center ">
                    <div className="one-area w-full  mt-5 ">
                        <label htmlFor="game-select">
                            <h2 className="text-white text-lg mb-2">Qual o game?</h2>
                        </label>
                        <select name="" id="select-game" className="bg-zinc-900 w-full h-12 text-zinc-400 mb-4">
                            <option value="disable" >Selecione o game que deseja jogar</option>
                            <option value="" className="text-white">League of Legends</option>
                            <option value="" className="text-white">Dota 02</option>
                            <option value="" className="text-white">Counter Strike</option>
                            <option value="" className="text-white">World War Craft</option>
                            <option value="" className="text-white">Apex Legends</option>
                            <option value="" className="text-white">Fortnite</option>
                        </select>

                        <label htmlFor="type-user">
                            <h2 className="text-white text-lg mb-2">Qual é o seu nickname?</h2>
                        </label>
                        <input type="text" name="" id="type-user" placeholder="Como te chama dentro do game?" className="bg-zinc-900 w-full h-12 text-zinc-400" />
                    </div>

                    <span className="flex justify-between mt-5 w-full">
                        <div className="one-area">
                            <label htmlFor="yrs-game">
                                <h2 className="text-white text-md mb-2">Joga há quantos anos?</h2>
                            </label>

                            <input type="number" name="" id="yrs-game" className="bg-zinc-900 w-[90%] h-12 text-zinc-400" placeholder="Tudo bem ser ZERO" />
                        </div>
                        <div className="two-area -mr-6">
                            <label htmlFor="discord-user">
                                <h2 className="text-white text-md mb-2">Seu usuário do Discord?</h2>
                            </label>

                            <input type="text" name="" id="discord-user" className="bg-zinc-900 text-zinc-400 w-[90%] h-12" placeholder="user#0000" />
                        </div>
                    </span>

                    <span className="flex gap-2 mt-4 w-full justify-between">
                        <div className="days-area flex flex-col">
                            <h2 className="text-white">Quando custuma jogar?</h2>
                            <div className="days-area flex gap-1 mt-2 flex-wrap">
                                <button className=" px-5 py-4 rounded-lg bg-violet-700 text-white font-bold text-lg">S</button>
                                <button className=" px-5 py-4 rounded-lg bg-violet-700 text-white font-bold text-lg">T</button>
                                <button className=" px-5 py-4 rounded-lg bg-violet-700 text-white font-bold text-lg">Q</button>
                                <button className=" px-5 py-4 rounded-lg bg-violet-700 text-white font-bold text-lg">Q</button>
                                <button className=" px-5 py-4 rounded-lg bg-violet-700 text-white font-bold text-lg">S</button>
                            </div>
                        </div>

                        <div className="hours-areas flex flex-col w-[35%] mr-8">
                            <h2 className="text-white">Até quando ?</h2>
                            <div className="inputs-hours-area flex gap-4 mt-2 w-[55%] h-[70%]">
                                <input type="number" name="" id="from-h" placeholder="De" className=" rounded-lg bg-zinc-900  max-w-full max-h-full" />
                                <input type="number" name="" id="from-h" placeholder="Até" className=" rounded-lg bg-zinc-900 max-w-full max-h-full" />
                            </div>
                        </div>
                    </span>

                    <span className="flex gap-2 w-full mt-5">
                        <input type="checkbox" name="" id="want-talk" className="bg-rose-400"/>
                        <label htmlFor="want-talk"><h3 className="text-white font-normal">Costumo me conectar ao chat de voz</h3></label>
                    </span>

                    <span className="flex mt-5 w-full justify-end items-center gap-5">
                        <button className="bg-zinc-500 hover:bg-zinc-700 duration-500 p-3 rounded-lg">
                            <h3 className='text-lg text-white'>Cancelar</h3>
                        </button>
                        <button className="flex gap-3 items-center justify-center p-2 rounded-lg bg-violet-500 hover:bg-violet-700 duration-500">
                            <GiConsoleController size='36' color='white'/>
                            <h3 className='text-white text-lg'>Encontrar duo</h3>
                        </button>
                    </span>
                </form>
            </div>
        </div>
    )
}