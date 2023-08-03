export default function Logo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
            }}
            viewBox="0 0 158 158"
        >
            <path
                d="M205.149 235c0-38.578 31.274-69.851 69.851-69.851 38.578 0 69.851 31.273 69.851 69.851 0 38.577-31.273 69.851-69.851 69.851-38.577 0-69.851-31.274-69.851-69.851Zm132.389 0c0-34.51-28.028-62.537-62.538-62.537S212.463 200.49 212.463 235 240.49 297.537 275 297.537 337.538 269.51 337.538 235Zm-83.381 20.868c0 3.335-5.211 3.335-5.211 0v-41.695c0-1.459 1.044-2.708 2.504-2.708 1.459 0 2.707 1.249 2.707 2.708v41.695Zm62.543 0c0 3.544-5.212 3.544-5.212 0v-41.695c0-1.459 1.039-2.708 2.499-2.708 1.46 0 2.713 1.249 2.713 2.708v41.695Zm-39.191-2.708c.209 3.544-5.212 3.544-5.212 0v-36.274c0-1.46 1.249-2.713 2.708-2.713s2.713 1.253 2.504 2.713v36.274Zm-15.635-5.003c0 3.335-5.004 3.335-5.212 0v-26.268c0-1.46 1.248-2.504 2.707-2.504a2.215 2.215 0 0 1 2.505 2.504v26.268Zm47.11 0c-.209 3.335-5.212 3.335-5.212 0v-26.268c-.208-1.46 1.045-2.504 2.504-2.504 1.46-.209 2.708 1.044 2.708 2.504v26.268Zm-23.555-2.713c0 3.544-5.212 3.544-5.212 0v-20.847c0-1.46 1.045-2.708 2.504-2.708s2.708 1.248 2.708 2.708v20.847Zm-39.191-2.499c0 3.336-5.212 3.336-5.212 0v-15.844c0-1.46 1.248-2.504 2.708-2.504a2.214 2.214 0 0 1 2.504 2.504v15.844Zm47.11-2.713c-.208 3.336-5.212 3.336-5.212 0v-10.424c-.208-1.459 1.045-2.707 2.505-2.707 1.459 0 2.707 1.248 2.707 2.707v10.424Zm-54.826-2.499c0 3.336-5.212 3.336-5.212 0v-5.42c0-1.46 1.045-2.505 2.504-2.505 1.46-.208 2.708 1.045 2.708 2.505v5.42Zm28.563-7.925c1.46 0 2.708 1.254 2.708 2.713v5.003c0 3.544-5.212 3.544-5.212 0v-5.003c0-1.459 1.045-2.504 2.296-2.713h.208Zm33.979 7.925c0 3.336-5.212 3.336-5.212 0v-5.42c0-1.46 1.04-2.505 2.5-2.505 1.459 0 2.712 1.045 2.712 2.505v5.42Zm52.531-1.184-.018.785-.026.785-.034.785-.042.785-.049.784-.057.784-.065.783-.072.782-.081.782-.088.782-.096.78-.104.779-.112.779-.119.777-.128.775-.135.775-.144.774-.151.771-.159.771-.167.768-.175.767-.183.765-.19.763-.199.761-.206.759-.214.757-.221.754-.229.753-.237.75-.244.747-.251.745-.26.742-.266.74-.274.737-.281.734-.288.731-.295.728-.303.725-.178.418-.312.717-.32.717-.328.714-.335.711-.341.708-.349.704-.355.701-.363.698-.37.693-.377.691-.384.686-.39.682-.398.679-.404.674-.412.67-.417.666-.425.662-.432.657-.438.654-.445.648-.452.644-.458.639-.464.635-.471.629-.477.626-.483.62-.49.615-.495.61-.502.605-.508.601-.514.594-.519.59-.525.585-.531.579-.536.574-.542.569-.548.563-.552.559-.322.319-.558.548-.566.544-.572.539-.577.533-.582.528-.587.522-.593.516-.598.51-.603.505-.608.498-.613.492-.618.486-.622.48-.628.474-.632.467-.638.461-.641.454-.647.448-.651.441-.655.435-.66.428-.664.421-.669.414-.672.408-.677.4-.68.394-.685.387-.688.38-.693.373-.695.366-.7.359-.703.352-.706.344-.709.338-.713.331-.716.324-.719.316-.723.31-.713.298-.728.296-.731.288-.734.281-.736.274-.739.267-.742.26-.745.252-.748.244-.749.237-.753.229-.754.222-.756.214-.759.206-.761.199-.763.191-.765.183-.767.175-.768.167-.771.16-.771.151-.773.144-.775.136-.776.128-.777.12-.779.112-.779.104-.78.097-.782.088-.782.081-.782.072-.783.066-.784.057-.785.049-.785.042-.784.034-.786.027-.785.019-.785.011-.785.004-.773-.004-.785-.011-.785-.018-.785-.026-.785-.034-.785-.042-.784-.049-.784-.057-.783-.065-.783-.072-.782-.081-.781-.088-.78-.096-.779-.104-.779-.112-.777-.119-.776-.128-.775-.135-.773-.144-.772-.151-.77-.159-.768-.167-.767-.175-.765-.183-.763-.19-.761-.199-.759-.206-.757-.214-.755-.221-.752-.229-.75-.237-.747-.244-.745-.251-.742-.26-.74-.266-.737-.274-.734-.28-.731-.289-.728-.295-.725-.303-.418-.178-.716-.312-.718-.32-.714-.328-.711-.334-.708-.342-.704-.349-.701-.355-.697-.363-.694-.37-.69-.377-.687-.383-.682-.391-.678-.398-.675-.404-.67-.412-.666-.418-.662-.424-.657-.432-.653-.438-.649-.445-.644-.452-.639-.457-.635-.465-.629-.471-.625-.477-.621-.483-.615-.49-.61-.495-.605-.502-.6-.508-.595-.514-.59-.519-.585-.525-.579-.531-.574-.536-.569-.542-.563-.547-.558-.553-.321-.322-.547-.558-.544-.567-.539-.571-.533-.577-.528-.582-.522-.588-.516-.592-.51-.598-.505-.603-.498-.608-.492-.613-.486-.618-.48-.622-.474-.628-.467-.633-.461-.637-.454-.642-.448-.646-.441-.651-.435-.655-.428-.66-.421-.664-.414-.669-.408-.672-.401-.677-.393-.681-.387-.684-.38-.689-.373-.692-.366-.696-.359-.699-.352-.703-.345-.706-.338-.71-.33-.713-.324-.716-.317-.719-.309-.722-.298-.713-.296-.728-.288-.73-.281-.734-.274-.737-.267-.739-.26-.743-.251-.744-.245-.747-.237-.75-.229-.752-.222-.755-.214-.756-.206-.759-.199-.761-.191-.763-.183-.765-.175-.767-.167-.768-.16-.77-.151-.772-.144-.774-.136-.774-.128-.776-.12-.777-.112-.779-.104-.779-.097-.78-.088-.782-.081-.782-.073-.782-.065-.783-.057-.784-.05-.785-.041-.784-.034-.785-.027-.786-.019-.785-.011-.785-.004-.785.004-.773.011-.785.018-.785.026-.785.034-.785.042-.785.049-.784.057-.784.065-.783.072-.783.08-.782.089-.781.096-.78.104-.78.112-.778.119-.777.128-.776.135-.775.144-.773.151-.772.159-.77.167-.768.175-.767.183-.765.19-.763.199-.761.206-.759.213-.757.222-.755.229-.752.236-.75.245-.747.251-.745.259-.742.267-.74.274-.737.281-.734.288-.731.295-.728.303-.725.178-.418.312-.717.32-.717.328-.714.334-.711.342-.708.349-.704.355-.701.363-.698.37-.693.377-.69.384-.687.39-.682.398-.678.404-.675.412-.67.418-.666.424-.662.432-.657.438-.653.445-.649.452-.644.458-.639.464-.635.471-.63.477-.625.483-.62.49-.615.495-.61.502-.605.508-.6.513-.595.52-.59.525-.585.531-.579.536-.574.542-.569.547-.563.553-.559.322-.32.558-.547.566-.544.572-.539.577-.533.582-.528.588-.522.592-.516.598-.51.603-.505.608-.498.613-.492.618-.486.622-.48.628-.474.632-.467.638-.461.641-.454.647-.448.651-.441.655-.435.66-.428.664-.421.669-.414.672-.408.677-.401.68-.393.685-.387.688-.38.693-.373.695-.366.7-.359.703-.352.706-.345.71-.338.712-.33.716-.324.72-.317.722-.309.713-.298.728-.296.73-.288.734-.282.737-.274.739-.266.742-.26.745-.252.747-.244.75-.237.752-.229.755-.222.756-.214.759-.206.761-.199.763-.191.765-.183.767-.175.768-.167.77-.16.772-.151.773-.144.775-.136.776-.128.777-.12.778-.112.78-.104.78-.097.781-.088.782-.081.783-.073.783-.065.784-.057.785-.05.784-.042.785-.034.785-.026.786-.019.785-.011.785-.004.773.003.785.011.785.019.785.026.785.034.785.042.784.049.784.057.783.064.783.073.782.08.781.089.78.096.78.104.778.111.777.12.776.128.775.135.773.144.772.151.77.159.768.167.767.175.765.183.763.19.761.199.759.206.757.213.755.222.752.229.75.236.747.244.745.252.743.259.739.267.737.273.734.281.731.289.728.295.725.303.418.177.717.312.717.321.714.328.711.334.708.342.704.349.701.355.698.363.693.37.69.377.686.383.683.391.679.398.674.404.67.411.666.419.662.424.657.432.653.438.649.445.644.451.639.458.635.465.629.471.625.477.62.483.616.49.61.495.605.502.6.508.595.513.59.52.585.525.579.531.574.536.569.542.563.547.558.553.32.322.548.558.544.566.538.572.534.577.527.582.523.587.516.593.51.598.504.603.499.608.492.612.486.618.48.623.474.628.467.632.461.637.454.642.448.647.441.651.435.655.428.66.421.664.414.668.408.673.4.677.394.68.387.685.38.688.373.692.366.696.359.7.352.702.344.707.338.709.331.713.324.716.316.719.31.722.298.714.296.728.288.73.281.734.274.737.267.739.26.742.251.745.245.747.237.75.229.752.222.755.214.756.206.759.199.761.19.763.183.765.176.767.167.768.16.77.151.772.144.773.135.775.129.776.12.777.112.778.104.78.097.78.088.781.081.782.072.783.066.783.057.784.049.784.042.785.034.785.027.785.019.786.011.785.004.785v.018l-.004.755-.011.785Zm-3.677-2.29-.01-.75-.018-.75-.025-.749-.033-.749-.039-.748-.047-.749-.055-.747-.062-.747-.069-.746-.077-.745-.084-.744-.091-.744-.1-.742-.106-.741-.114-.74-.122-.739-.129-.738-.137-.736-.144-.735-.152-.733-.159-.732-.167-.73-.174-.728-.181-.727-.189-.725-.196-.722-.204-.721-.211-.719-.218-.716-.226-.714-.232-.712-.24-.71-.247-.708-.254-.704-.262-.703-.267-.7-.276-.697-.282-.695-.284-.68-.295-.689-.302-.687-.308-.683-.316-.68-.322-.676-.328-.674-.335-.67-.343-.666-.348-.663-.355-.66-.362-.656-.368-.652-.375-.648-.382-.645-.388-.64-.394-.637-.401-.633-.407-.628-.414-.624-.42-.62-.426-.616-.433-.611-.439-.607-.445-.603-.451-.598-.457-.593-.463-.589-.469-.584-.475-.58-.48-.575-.487-.57-.492-.565-.497-.56-.504-.556-.508-.551-.515-.545-.519-.541-.528-.539-.3-.302-.532-.527-.538-.523-.543-.517-.548-.512-.552-.507-.558-.501-.562-.495-.567-.49-.572-.484-.576-.478-.582-.473-.586-.466-.59-.461-.596-.454-.599-.449-.605-.442-.609-.437-.613-.43-.617-.424-.622-.417-.626-.411-.63-.405-.634-.398-.639-.392-.641-.385-.647-.379-.65-.373-.654-.365-.657-.359-.661-.353-.664-.346-.668-.339-.672-.333-.675-.326-.678-.319-.681-.313-.684-.306-.691-.301-.392-.167-.692-.288-.694-.282-.698-.275-.699-.269-.702-.261-.705-.254-.707-.247-.71-.24-.712-.233-.714-.225-.717-.218-.718-.211-.721-.204-.723-.196-.724-.189-.727-.182-.728-.174-.73-.167-.732-.159-.733-.152-.735-.144-.736-.137-.738-.129-.739-.122-.74-.114-.741-.107-.743-.099-.743-.092-.745-.084-.745-.077-.746-.069-.747-.062-.747-.054-.748-.047-.749-.04-.749-.033-.749-.025-.75-.018-.75-.01-.738-.004-.75.003-.75.011-.75.018-.749.025-.749.033-.748.039-.749.047-.747.055-.747.062-.746.069-.745.076-.744.085-.744.091-.742.099-.741.107-.74.114-.739.122-.738.129-.736.137-.735.144-.733.152-.732.159-.73.166-.728.174-.727.182-.725.189-.722.196-.721.204-.719.211-.716.218-.714.225-.713.233-.709.24-.708.247-.704.254-.703.261-.7.268-.697.275-.695.282-.68.284-.689.296-.686.302-.683.308-.68.316-.677.321-.673.329-.671.335-.666.342-.663.349-.66.355-.656.362-.652.368-.648.375-.645.381-.64.388-.637.395-.632.401-.629.407-.624.414-.62.42-.616.426-.611.433-.607.439-.603.444-.598.451-.593.458-.589.463-.584.469-.58.474-.575.481-.57.487-.565.492-.56.497-.556.504-.55.508-.546.514-.541.52-.538.527-.303.301-.527.533-.523.537-.517.543-.512.548-.507.552-.501.558-.495.562-.49.567-.484.572-.478.577-.473.581-.466.586-.461.591-.454.595-.449.6-.442.604-.437.609-.43.613-.423.617-.418.622-.411.626-.405.63-.398.634-.392.638-.385.643-.379.646-.373.65-.365.653-.359.658-.353.661-.346.664-.339.668-.333.672-.326.675-.319.678-.313.681-.306.684-.3.691-.168.392-.288.692-.282.694-.275.698-.268.699-.262.703-.254.704-.247.708-.24.709-.232.712-.226.715-.218.716-.211.719-.204.72-.196.723-.189.724-.182.727-.174.728-.167.73-.159.732-.152.733-.144.735-.137.736-.129.738-.122.739-.114.74-.107.742-.099.742-.091.743-.085.745-.076.745-.07.746-.062.747-.054.748-.047.747-.04.749-.033.749-.025.75-.018.749-.01.75-.004.738.004.75.01.75.018.749.025.75.033.749.039.748.047.749.055.747.062.746.069.747.077.745.084.744.091.744.1.742.106.741.114.74.122.739.129.738.137.736.144.735.152.733.159.732.166.73.174.728.182.727.189.724.196.723.204.721.211.719.218.716.226.714.232.712.24.71.247.707.254.705.261.703.269.7.275.697.282.695.283.68.296.689.302.686.308.683.316.68.322.677.328.673.335.67.342.667.349.663.355.66.362.656.368.652.375.648.382.645.388.64.394.637.401.632.407.629.414.624.42.62.426.616.433.611.439.607.444.603.451.598.458.593.463.589.469.584.474.58.481.575.487.57.492.565.497.56.504.556.508.55.514.546.52.541.527.538.301.303.533.528.537.522.543.517.548.512.552.507.558.501.562.495.567.49.572.484.577.478.581.473.586.466.591.461.595.454.6.449.604.443.609.436.613.43.617.424.622.417.626.411.63.405.634.398.639.392.642.385.646.379.65.372.654.366.657.36.661.352.665.346.668.339.671.333.675.326.678.319.681.313.685.306.691.301.391.166.692.289.695.282.697.275.699.268.703.261.705.255.707.247.709.24.712.232.715.226.716.218.719.211.72.204.723.196.725.189.726.182.728.174.73.167.732.159.733.152.735.144.737.137.737.129.739.122.74.114.742.107.742.099.744.091.744.085.745.076.747.07.746.062.748.054.748.047.748.04.749.033.75.025.749.018.75.01.738.004.75-.004.75-.01.749-.018.75-.025.749-.033.748-.039.748-.047.748-.055.746-.062.747-.069.745-.077.744-.084.743-.091.743-.1.741-.106.74-.114.739-.122.738-.129.736-.137.735-.144.733-.152.732-.159.73-.166.728-.174.727-.182.724-.189.723-.196.721-.204.719-.211.716-.218.715-.225.711-.233.71-.24.708-.247.704-.254.703-.261.699-.268.698-.276.695-.281.681-.284.689-.296.686-.302.683-.308.679-.316.677-.322.674-.328.67-.335.666-.342.664-.349.659-.355.656-.362.652-.368.649-.375.644-.381.641-.388.636-.395.633-.401.628-.407.624-.414.62-.42.616-.426.611-.433.607-.438.603-.445.598-.452.593-.456.589-.464.585-.468.579-.475.575-.481.57-.487.565-.491.561-.498.555-.504.551-.508.545-.514.541-.52.539-.528.302-.3.528-.532.522-.538.517-.543.512-.547.507-.553.501-.557.495-.563.49-.567.484-.572.478-.576.473-.582.466-.586.461-.59.454-.596.449-.599.443-.605.436-.609.43-.613.424-.617.417-.622.411-.626.405-.63.398-.634.392-.638.385-.642.379-.646.372-.651.366-.653.36-.658.352-.661.346-.664.339-.668.333-.672.326-.675.319-.678.313-.681.306-.684.3-.691.167-.392.289-.692.282-.695.275-.697.268-.699.261-.703.255-.705.247-.707.24-.709.232-.712.226-.715.218-.716.211-.719.204-.72.196-.723.189-.724.182-.727.174-.728.167-.73.159-.732.152-.733.144-.735.137-.737.129-.737.121-.739.115-.74.107-.742.099-.742.091-.744.085-.744.076-.745.07-.747.062-.746.054-.748.047-.748.04-.748.033-.749.025-.75.018-.749.01-.75.004-.738v-.018l-.004-.732Z"
                style={{
                    fill: '#fff',
                    fillRule: 'nonzero',
                }}
                transform="translate(-196.39 -156.39)"
            />
        </svg>
    );
}
