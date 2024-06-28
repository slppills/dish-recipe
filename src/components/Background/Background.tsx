import React, { ReactNode } from "react";
import * as S from "./Style";
import { useLocation, useNavigate } from "react-router-dom";

interface BackgroundProps {
	children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			<S.Wrapper>
				<S.ContentBackground>
					<S.ContentWrapper>
						<S.HomeImg
							$home={
								location.pathname === "/" ? "hidden" : "visible"
							}
							onClick={() => navigate("/")}
						/>
						{children}
					</S.ContentWrapper>
				</S.ContentBackground>
			</S.Wrapper>
		</>
	);
};

export default Background;
