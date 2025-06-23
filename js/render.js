// Tailwind 기반 스타일 클래스 정의
const paginationStyle = "justify-center items-center gap-2 p-4";
const pageNumberListStyle = "flex gap-1";
const pageNumberStyle = "px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-200 transition font-normal";
const pageNumberActiveStyle = "bg-emerald-500 text-white font-bold";

function initPagination(totalPage) {
  const pagination = document.getElementById("pagination");
  pagination.style.display = "flex";
  pagination.innerHTML = ""; // 기존 내용 초기화
  pagination.className = paginationStyle;

  const prevButton = document.createElement("button");
  prevButton.id = "page-prev";
  prevButton.className = pageMoveButtonStyle;
  prevButton.textContent = "←";

  const pageNav = document.createElement("nav");
  pageNav.id = "pagination-list";
  pageNav.className = pageNumberListStyle;

  const nextButton = document.createElement("button");
  nextButton.id = "page-next";
  nextButton.className = pageMoveButtonStyle;
  nextButton.textContent = "→";

  for (let i = 0; i < totalPage && i < 7; i++) {
    const page = document.createElement("button");
    page.textContent = i + 1;
    page.className = pageNumberStyle;
    pageNav.appendChild(page);
  }

  pagination.appendChild(prevButton);
  pagination.appendChild(pageNav);
  pagination.appendChild(nextButton);
}

function renderPagination(totalPage, currentPage, targetList = null) {
  const prevButton = document.getElementById("page-prev");
  const nextButton = document.getElementById("page-next");
  const pageNav = document.getElementById("pagination-list");
  const pageList = pageNav.querySelectorAll("button");

  if (currentPage === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  } else if (currentPage === totalPage) {
    nextButton.disabled = true;
    prevButton.disabled = false;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

  prevButton.onclick = (e) => {
    e.preventDefault();
    renderBlogList(targetList, currentPage - 1);
    renderPagination(totalPage, currentPage - 1, targetList);
  };

  nextButton.onclick = (e) => {
    e.preventDefault();
    renderBlogList(targetList, currentPage + 1);
    renderPagination(totalPage, currentPage + 1, targetList);
  };

  const getPages = () => {
    if (totalPage <= 7) return Array.from({ length: totalPage }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPage];
    if (currentPage > totalPage - 4) return [1, "...", totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPage];
  };

  const pages = getPages();
  pageNav.innerHTML = "";
  pages.forEach((p) => {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = p;
    if (p === "...") {
      pageBtn.className = pageNumberStyle;
      pageBtn.disabled = true;
    } else {
      pageBtn.className =
        p === currentPage ? `${pageNumberStyle} ${pageNumberActiveStyle}` : pageNumberStyle;
      pageBtn.onclick = () => {
        renderBlogList(targetList, p);
        renderPagination(totalPage, p, targetList);
      };
    }
    pageNav.appendChild(pageBtn);
  });
}
