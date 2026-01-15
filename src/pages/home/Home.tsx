import capaImage from "../../assets/capa2.png"

function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
              Blog da Aiyra!
            </h2>

            <p className="text-xl">
              Aqui vou falar sobre minha vida na tecnologia e meus aprendizados na
              Generation Brasil.
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white
                border-white border-solid border-2 py-2 px-4"
              >
                Confira minhas postagens
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={capaImage}
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
