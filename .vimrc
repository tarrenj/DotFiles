
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => VIM splits
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Use decent keybindings, because I'm not a crazy person
nnoremap <c-h> <C-w>h
nnoremap <c-j> <C-w>j
nnoremap <c-k> <C-w>k
nnoremap <c-l> <C-w>l

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => VIM user interface
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Ignore case when searching
set ignorecase

" Highlight search results
set hlsearch

" Show matching brackets when text indicator is over them
set showmatch
" How many tenths of a second to blink when matching brackets
set mat=2

" Enable syntax highlighting
syntax enable
" Enable line numbers
set number


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => File Managment
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" netrw Always tree
let g:netrw_liststyle=3
" netrw Bugger off banner!
let g:netrw_banner = 0
" Always NERDTree!
autocmd vimenter * NERDTree
autocmd VimEnter * wincmd p
" Kill if NERDTree is the only thing left
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" Close buffer if file deleted
let NERDTreeAutoDeleteBuffer = 1
" NERDTree Pretyfication
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Colors and Fonts
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
colorscheme desert
set background=dark

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Text, tab and indent related
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Use spaces instead of tabs
set expandtab

" Be smart when using tabs ;)
set smarttab

" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4

set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

" Fix backspace
set backspace=indent,eol,start
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Moving around, tabs, windows and buffers
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Return to last edit position when opening files (You want this!)
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif


""""""""""""""""""""""""""""""
" => Status line
""""""""""""""""""""""""""""""
" Always show the status line
set laststatus=2
