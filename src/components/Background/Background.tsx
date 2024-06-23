import React, { ReactNode } from "react";
import * as S from "./Style";
import { useLocation } from "react-router-dom";

interface BackgroundProps {
	children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
	const location = useLocation();

	return (
		<>
			<S.Wrapper>
				<S.ContentBackground>
					<S.ContentWrapper>
						<S.HomeImg
							home={
								location.pathname === "/" ? "hidden" : "visible"
							}
						/>
						{children}
					</S.ContentWrapper>
				</S.ContentBackground>
			</S.Wrapper>
		</>
	);
};

export default Background;
